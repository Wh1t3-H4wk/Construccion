using System;
using Cafeteria.Models;

namespace Cafeteria.DB
{
    public interface IUnitOfWork : IDisposable
    {
        public Repository<Producto, int> Productos { get;}
        public Repository<Pedido, int> Pedidos { get; }
        public Repository<Codigo, string> Codigos { get; }
        public Repository<BaseUser,string> BaseUsers { get;}
        public Repository<Usuario,string> Usuarios { get;}
        public Repository<Cliente,string> Clientes { get;}
        public int Complete();
    }
}