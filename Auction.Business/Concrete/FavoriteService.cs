using Auction.Business.Abstract;
using Auction.DataAccess.Abstract;
using Auction.Entities.Entities;
using FinalAspReactAuction.Server.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Business.Concrete
{
    public class FavoriteService : IFavoriteService
    {
        private readonly IFavoriteDal _context;

        public FavoriteService(IFavoriteDal context)
        {
            _context = context;
        }



        public async Task AddAsync(Favorite entity)
        {
            await _context.Add(entity);
        }

        public async Task DeleteAsync(Favorite entity)
        {
            await _context.Delete(entity);
        }


        public async Task<Favorite> GetAsync(Expression<Func<Favorite, bool>> predicate)
        {
            return await _context.Get(predicate);
        }
    }
}
