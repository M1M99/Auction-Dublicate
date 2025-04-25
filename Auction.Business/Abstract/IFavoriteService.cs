using Auction.Entities.Entities;
using FinalAspReactAuction.Server.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Auction.Business.Abstract
{
    public interface IFavoriteService
    {
        Task<Favorite> GetAsync(Expression<Func<Favorite, bool>> predicate);
        Task AddAsync(Favorite entity);
        Task DeleteAsync(Favorite entity);
    }
}
