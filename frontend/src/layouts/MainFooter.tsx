
const MainFooter: React.FC = () => {
    return (
        <footer className="py-6 mt-12">
            <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MainFooter;