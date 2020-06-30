using System;
using Cafeteria.Models;

namespace Cafeteria.DB
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        public Repository<Producto, int> Productos { get; }
        public Repository<Pedido, int> Pedidos { get; }
        public Repository<Codigo, string> Codigos { get; }
        public Repository<BaseUser,string> BaseUsers { get;}
        public Repository<Usuario,string> Usuarios { get;}
        public Repository<Cliente,string> Clientes { get;}
        public Repository<ProductoPedido, int> ProductoPedidos { get; set; }
        
        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Productos = new Repository<Producto, int>(context);
            Pedidos = new Repository<Pedido, int>(context);
            Codigos = new Repository<Codigo, string>(context);
            BaseUsers = new Repository<BaseUser, string>(context);
            Usuarios = new Repository<Usuario, string>(context);
            Clientes = new Repository<Cliente, string>(context);
            ProductoPedidos = new Repository<ProductoPedido, int>(context);
        }
        /// <summary>
        /// Save changes to the DB
        /// </summary>
        public int Complete() => _context.SaveChanges();
        public void Dispose() => _context.Dispose();
    }
}