import Link from "next/link";

const Navbar=()=>{
    return(
        <nav>
            <Link href='/'>Homepage</Link>
            <Link href='/about'>About</Link>
        </nav>
    )
}

export default Navbar