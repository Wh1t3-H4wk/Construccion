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
        public IEnumerable<Pedido> GetAll() => _context.Pedidos.GetAll();
        
        [HttpGet("{id}")]
        public Pedido GetById(int id) => _context.Pedidos[id];
        
    }
}