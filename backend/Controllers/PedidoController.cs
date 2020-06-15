using System.Collections.Generic;
using System.Linq;
using Cafeteria.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cafeteria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PedidoController : ControllerBase
    {
        private readonly UnityOfWork _context;
        public PedidoController(ApplicationDbContext db) =>_context = new UnityOfWork(db);

        [HttpGet]
        public IEnumerable<Pedido> GetAll() => _context.Pedidos.GetAll().Include(p => p.Codigo);
        
        [HttpGet("{id}")]
        public Pedido GetById(int id) => _context.Pedidos.Get(id);

        [HttpGet("{id}/codigo")]
        public Codigo GetCodigo(int id) => _context.Codigos.Get(GetById(id).CodigoName);


    }
}