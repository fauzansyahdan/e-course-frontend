import Navbar from "../components/navbar";
import CourseCard from "../components/coursecard";
import Footer from "../components/footer";

function Home() {
  const courses = [
    {
      title: "React for Beginners",
      instructor: "Fauzan Syahdan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
      description: "Belajar React JS dari dasar hingga membuat proyek nyata.",
    },
    {
      title: "Node.js Mastery",
      instructor: "Rizky Ahmad",
      image:
        "https://images.seeklogo.com/logo-png/27/2/node-js-logo-png_seeklogo-273750.png",
      description: "Bangun backend handal menggunakan Node.js dan Express.",
    },
    {
      title: "UI/UX Design Basics",
      instructor: "Siti Aisyah",
      image:
        "https://png.pngtree.com/png-clipart/20211020/ourmid/pngtree-gradient-ui-ux-user-interface-icon-mobile-for-social-media-png-image_3973585.png",
      description: "Pelajari dasar desain modern dan user experience.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Welcome to GoEdu
        </h1>
        <p className="mt-2, text-gray-600">Belajar di mana saja, kapan saja</p>
      </div>

      <div className="p-8">
        <h2 className="text-2x1 font-semibold text-center mb-6 text-blue-700">
          Kursus Populer
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              instructor={course.instructor}
              image={course.image}
              description={course.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
