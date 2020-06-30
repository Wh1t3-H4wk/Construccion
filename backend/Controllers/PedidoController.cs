using System.Collections.Generic;
using Cafeteria.DB;
using Cafeteria.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cafeteria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly IUnitOfWork _context;
        public PedidoController(IUnitOfWork unitOfWork) =>_context = unitOfWork;

        [HttpGet]
        public ActionResult<IEnumerable<Pedido>> GetAll() => Ok(_context.Pedidos.GetAll());

        [HttpGet("{id}")]
        public ActionResult<Pedido> GetById(int id)
        {
            var producto = _context.Pedidos[id];
            if (producto == null) return NotFound();
            return Ok(producto);
        }

        [HttpPost]
        public IActionResult AddPedido(PedidoViewModel pedidoViewModel)
        {
            var pedido = new Pedido();
            pedido.Direccion = pedidoViewModel.Direccion;
            pedido.Preparacion = pedidoViewModel.Preparacion;
            pedido.Valor = pedidoViewModel.Valor;
            var cliente = _context.Clientes[pedidoViewModel.ClienteMail];
            _context.Pedidos.Add(pedido);
            
            var productoPedido = new List<ProductoPedido>();
            foreach (var xProductoViewModel in pedidoViewModel.Productos)
            {
                productoPedido.Add( new ProductoPedido
                {
                    Pedido = pedido, Cantidad = xProductoViewModel.Cantidad, 
                    Producto = _context.Productos[xProductoViewModel.ProductoId]
                });
            }
            cliente.Pedidos.AddRange(productoPedido);
            _context.Complete();
            return Ok();
        }
    }
}