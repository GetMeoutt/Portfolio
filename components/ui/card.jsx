export const Card = ({ title, picture, description,link=""}) => {
    return (
        <div
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col items-center   
              h-96 w-80 hover:border-blue-500 hover:scale-105 ease-in-out duration-300" 
        >
            <h4
                className="text-xl font-bold mb-2 text-center truncate"
                title={title} 
            >
                {title}
            </h4>
            <img
                src={picture}
                alt="project picture"
                className="rounded-lg mb-2 w-80 h-36 object-cover"
            />
            
            <p
                className="text-sm font-extralight text-center overflow-hidden text-ellipsis max-h-12"
            >
                {description}
            </p>
            <div
                className="rounded-md bg-green-400 w-1/3 self-end  overflow-hidden mt-auto text-gray-900 text-center cursor-pointer "
            >
                <a href={link}>Take a Look</a>
            </div>
        </div>
    );
};
