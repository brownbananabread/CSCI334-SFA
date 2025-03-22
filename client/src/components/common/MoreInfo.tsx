const MoreInfo: React.FC = () => {
  return (
    <div className="mt-5">
        <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
        Need more information?{" "}
        <a
            href="http://localhost:5174/CSIT321/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
            Docs
        </a>
        </p>
    </div>
  )
}

export default MoreInfo