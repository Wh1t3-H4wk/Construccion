namespace Cafeteria.Security
{
    public static class Hashing
    {
        private static string GetRandomSalt() 
            => BCrypt.Net.BCrypt.GenerateSalt(12);
        public static string HashPassword(this string password)
            => BCrypt.Net.BCrypt.HashPassword(password, GetRandomSalt());
        public static bool ValidatePassword(this string password, string correctHash)
            => BCrypt.Net.BCrypt.Verify(password, correctHash);

    }
}