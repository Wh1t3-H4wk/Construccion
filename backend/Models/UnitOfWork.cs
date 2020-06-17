using System;
using Cafeteria.Repository;

namespace Cafeteria.Models
{
    public class UnityOfWork: IDisposable
    {
        private readonly ApplicationDbContext _context;
        public Repository<Producto, int> Productos { get; set; }
        public Repository<Pedido, int> Pedidos { get; set; }
        public Repository<Codigo, string> Codigos { get; set; }
        public UnityOfWork(ApplicationDbContext context)
        {
            _context = context;
            Productos = new Repository<Producto, int>(context);
            Pedidos = new Repository<Pedido,int>(context);
            Codigos = new Repository<Codigo,string>(context);
        }
        /// <summary>
        /// Save changes to the DB
        /// </summary>
        public int Complete() => _context.SaveChanges();
        
        public void Dispose() => _context.Dispose();
    }
}