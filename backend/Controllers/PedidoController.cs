using System.Collections.Generic;
using System.Linq;
using Cafeteria.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cafeteria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly UnityOfWork _context;
        public PedidoController(ApplicationDbContext db) =>_context = new UnityOfWork(db);

        [HttpGet]
        public IEnumerable<Pedido> GetAll() => _context.Pedidos.GetAll();
        
        [HttpGet("codigo")]
        public IEnumerable<Codigo> Codigos() => _context.Codigos.GetAll();
    }
}