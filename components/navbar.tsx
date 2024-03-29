import Link from "next/link";
import Container from "./ui/container";
import getCategories from "@/actions/get-categories";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

const  NavBar=async()=>{ 

  const categories = await getCategories();
    return (
      <div border-b>
       <Container>
        <div className="relative px-4 sm:px-6 lg:px-8  flex h-16 items-center ">
        <Link href="/" className="ml-4  mt-4 flex lg:ml-0 gap-x-2">
        <MainNav data={categories}/>
        
        </Link>
        <NavbarActions />
        </div>
       </Container>
      </div>
    );
  }
  
  export default NavBar;