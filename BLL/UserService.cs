using System.Linq;
using DAL;
using Entity;
namespace BLL
{
    public class UserService
    {
        private readonly FigorificoContext _context;
        public UserService(FigorificoContext context)=> _context = context;
        public User Validate(string userName, string password) 
        {
            return _context.Users.FirstOrDefault(t => t.UserName == userName && t.Password == password && t.Status == "Active");
        }
    }
}