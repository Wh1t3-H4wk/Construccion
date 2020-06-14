using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Cafeteria.Models;
using Microsoft.EntityFrameworkCore;

namespace Cafeteria.Repository
{
    /// <summary>
    /// Generic implementation for CRUD operations and more
    /// If there is need of a more custom query extend this class
    /// </summary>
    /// <typeparam name="TEntity">Model for the operations</typeparam>
    public class Repository<TEntity> where TEntity : class
    {
        protected readonly ApplicationDbContext Context;
        public Repository(ApplicationDbContext context) => Context = context;
        /// <summary>
        /// Get element by his primary key
        /// </summary>
        /// <param name="key">Primary Key</param>
        public TEntity Get<T>(T key) => Context.Set<TEntity>().Find(key);
        public IQueryable<TEntity> GetAllWithInclude(params Expression<Func<TEntity, object>>[] includes)
        {
            DbSet<TEntity> dbSet = Context.Set<TEntity>();
            IQueryable<TEntity> query = null;
            foreach (var include in includes)
                query = dbSet.Include(include);
            return query ?? dbSet;
        }
        public IQueryable<TEntity> GetAll() => Context.Set<TEntity>();
        public IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate) 
            =>Context.Set<TEntity>().Where(predicate);
        public TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate)
            =>Context.Set<TEntity>().SingleOrDefault(predicate);
        public void Add(TEntity entity) => Context.Set<TEntity>().Add(entity);
        public void Update(TEntity entity) => Context.Set<TEntity>().Update(entity);
        public void AddRange(IEnumerable<TEntity> entities) => Context.Set<TEntity>().AddRange(entities);
        public void Remove(TEntity entity) => Context.Set<TEntity>().Remove(entity);
        public void RemoveRange(IEnumerable<TEntity> entities) => Context.Set<TEntity>().RemoveRange(entities);
    }
}