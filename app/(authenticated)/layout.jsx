"use client";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";

function layout({ children }) {
  return (
    <div className='layout'>
      <div className='main-body'>
        <NavBar />
        <div className='main-content'>
          <Header />
          {children}
        </div>
      </div>
      <footer>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span lang='en'>David Cordero de Jesus</span>
        </p>
      </footer>
    </div>
  );
}

export default layout;
