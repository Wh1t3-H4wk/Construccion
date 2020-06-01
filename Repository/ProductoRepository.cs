using System;
using System.Collections.Generic;
using Cafeteria.Models;

namespace Cafeteria.Repository
{
    public class ProductoRepository : Repository<Producto>
    {
        public IEnumerable<Producto> GetCatalogo() => throw new Exception("not implemented");
        public IEnumerable<Producto> GetDestacados() => throw new Exception("not implemented");
        public ProductoRepository(ApplicationDbContext context) : base(context) { }
    }
}