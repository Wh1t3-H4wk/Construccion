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
        public ProductoRepository Productos { get; set; }
        public UnityOfWork(ApplicationDbContext context)
        {
            _context = context;
            Productos = new ProductoRepository(context);
        }
        /// <summary>
        /// Save changes to the DB
        /// </summary>
        /// <returns></returns>
        public int Complete() => _context.SaveChanges();
        
        public void Dispose() => _context.Dispose();
    }
}