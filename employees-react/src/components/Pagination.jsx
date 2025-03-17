export default function Pagination({ currentPage, totalPages, sayfaDegis }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1); // 1'den totalPages'e kadar numaralar
    console.log(pageNumbers)
    return (
        <ul className="pagination">
            {pageNumbers.map((number) => (
                <li 
                    key={number} 
                    className={`page-item ${currentPage === number ? "active" : ""}`}
                >
                    <button 
                        className="page-link" 
                        onClick={() => sayfaDegis(number)}
                    >
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    );
}
