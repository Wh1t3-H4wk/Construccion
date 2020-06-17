namespace Cafeteria.Models
{
    public class ProductoPedido
    {
        public int Id { get; set; }
        public Pedido Pedido { get; set; }
        public Producto Producto { get; set; }
    }
}