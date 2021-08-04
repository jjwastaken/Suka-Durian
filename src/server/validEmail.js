module.exports = (req, res, next) => {
    const { email, name, password } = req.body;
  
    // check if email is valid
    function validEmail(userEmail) {
        // regex
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
  
    if (req.path === "/users") {
      console.log(!email.length);
      if (![email, name, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } 
      else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    } 
    
    else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } 
      else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    }
  
    next();
  };