import Link from 'next/link';

function Admin() {
    return(
        <>
        <h1>Admin Page</h1>
        <div className='admin_page'>
                <Link href='/coins'>
                    <a>Crypto Market</a>    
                </Link>
                <Link href='/geo'>
                    <a>Geo Location</a>    
                </Link>
            </div>
        </>
    )
}

export default Admin;