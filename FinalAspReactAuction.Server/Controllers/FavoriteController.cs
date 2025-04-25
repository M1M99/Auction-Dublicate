using Auction.Business.Concrete;
using Auction.DataAccess.Abstract;
using Auction.Entities.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalAspReactAuction.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        private readonly FavoriteService favoriteService;

        public FavoriteController(FavoriteService favoriteService)
        {
            this.favoriteService = favoriteService;
        }

        [HttpPost("Add")]
        public async Task AddToFavorites(string userId, int carId)
        {
            var existingFavorite = await favoriteService.GetAsync(f => f.UserId == userId && f.CarId == carId);

            if (existingFavorite != null)
            {
                throw new InvalidOperationException("This car is already in your favorites.");
            }

            var favorite = new Favorite
            {
                CarId = carId,
                UserId = userId
            };

            await favoriteService.AddAsync(favorite);
        }
        [HttpDelete]
        public async Task RemoveFromFavorites(string userId, int carId)
        {
            var existingFavorite = await favoriteService.GetAsync(f => f.UserId == userId && f.CarId == carId);

            if (existingFavorite == null)
            {
                throw new InvalidOperationException("This car is not in your favorites.");
            }

            await favoriteService.DeleteAsync(existingFavorite);
        }
    }
}

