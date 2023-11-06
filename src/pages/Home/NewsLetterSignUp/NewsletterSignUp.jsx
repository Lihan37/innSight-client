

const NewsletterSignUp = () => {
    return (
        <div className="newsletter-signup p-10 text-center mt-14 py-10 bg-gray-900 rounded-lg mb-10">
            <h2 className="text-4xl font-bold text-yellow-200 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-4 text-pink-400">
                Get the latest updates, exclusive deals, and special offers delivered directly to your inbox. Join our community of happy travelers today and stay informed about:
            </p>
            <ul className="text-left mb-6 text-yellow-200 text-xl pl-8 list-decimal">
                <li className="mb-2">New hotel openings and renovations</li>
                <li className="mb-2">Exclusive discounts and promotions</li>
                <li className="mb-2">Travel tips and destination recommendations</li>
                <li className="mb-2">Exciting events and experiences</li>
            </ul>

            <form className="flex flex-row ">
                <input type="email" placeholder="Your Email Address" className="w-full items-center h-[50px]  px-4 py-2 mb-4 sm:mr-4 rounded-lg" />
                <input type="submit" className="btn" value="Subscribe" />
            </form>
        </div>
    );
};

export default NewsletterSignUp;
