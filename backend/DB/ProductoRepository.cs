using System;
using System.Collections.Generic;
using Cafeteria.Models;

namespace Cafeteria.Repository
{
    public class ProductoRepository : Repository<Producto>
    {
        public IEnumerable<Producto> GetByCategory(string categoria) => this.Find(p => p.Categoria.Equals(categoria));
        
        public ProductoRepository(ApplicationDbContext context) : base(context) { }
    }
}