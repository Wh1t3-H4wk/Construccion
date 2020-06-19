namespace Cafeteria.Models
{
    public class Token
    {
        public string TokenId { get; }
        public string Rol { get;}
        public Token(string tokenId, string rol)
        {
            TokenId = tokenId;
            Rol = rol;
        }
    }
}