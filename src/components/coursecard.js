function CourseCard({ title, instructor, image, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-72">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">by {instructor}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">
          Lihat Kursus
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
