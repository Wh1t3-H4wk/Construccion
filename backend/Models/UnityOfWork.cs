using System;
using Cafeteria.Repository;

namespace Cafeteria.Models
{
    /// <summary>
    /// DataBase "Facade" for connection to the Database, use this for the manage access to objects from the database
    /// I should convert this to a singleton...
    /// </summary>
    public class UnityOfWork: IDisposable
    {
        private readonly ApplicationDbContext _context;
        public Repository<Producto> Productos { get; set; }
        public Repository<Pedido> Pedidos { get; set; }
        public Repository<Codigo> Codigos { get; set; }
        public UnityOfWork(ApplicationDbContext context)
        {
            _context = context;
            Productos = new Repository<Producto>(context);
            Pedidos = new Repository<Pedido>(context);
            Codigos = new Repository<Codigo>(context);
        }
        /// <summary>
        /// Save changes to the DB
        /// </summary>
        public int Complete() => _context.SaveChanges();
        
        public void Dispose() => _context.Dispose();
    }
}