"use client";
import styled from "styled-components";
import { LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import AuthLogoutButton from "@/app/auth/logout/AuthLogoutButton";
import { navItems } from "@/utils/config";
import Link from "next/link";

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px; /* narrower on mobile */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: white;
  z-index: 1100;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  box-shadow: ${(props) =>
    props.$isOpen ? "4px 0 20px rgba(0,0,0,0.1)" : "none"};

  @media (min-width: 1024px) {
    position: relative;
    transform: none; /* always visible on desktop */
    width: 280px; /* standard width on desktop */
    box-shadow: none;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;

  @media (min-width: 1024px) {
    display: none; /* no backdrop on desktop */
  }
`;
const SidebarHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(45deg, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #38bdf8, #06b6d4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
const Navigation = styled.nav`
  padding: 24px 0;
`;
const NavItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  border-left: ${(props) =>
    props.$active ? "4px solid #38bdf8" : "4px solid transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }
`;
const HamburgerButton = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1200;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

function NavBar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle screen size + auto-open on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true); // always open on desktop
      } else {
        setSidebarOpen(false); // closed on mobile
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-close sidebar when route changes (mobile only)
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!user) return <p>Loading...</p>;
  if (!mounted) return null;

  const { userName, jobTitle, initials, email, firstName, role } = user;

  return (
    <>
      {/* Hamburger toggle (mobile only) */}
      <HamburgerButton onClick={() => setSidebarOpen((prev) => !prev)}>
        {sidebarOpen ? <X size={28} color='white' /> : <Menu size={28} />}
      </HamburgerButton>

      {/* Backdrop (mobile only) */}
      <Backdrop $isOpen={sidebarOpen} onClick={() => setSidebarOpen(false)} />

      <Sidebar $isOpen={sidebarOpen}>
        <SidebarHeader>
          <Logo>RBT Forms</Logo>
          <UserInfo>
            <Avatar>{initials}</Avatar>
            <div>
              <div style={{ fontWeight: "600" }}>{userName}</div>
              <div style={{ fontSize: "14px", opacity: "0.8" }}>{jobTitle}</div>
            </div>
          </UserInfo>
        </SidebarHeader>

        <Navigation>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              $active={pathname === item.id}
              onClick={() =>
                item.link
                  ? window.open(item.link, "_blank")
                  : router.push(item.id)
              }
            >
              <item.icon size={20} />
              {item.label}
              {/* {item.link ? (
                <Link
                  href={item.link}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {item.label}
                </Link>
              ) : (
                item.label
              )} */}
            </NavItem>
          ))}
        </Navigation>

        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            right: "24px",
          }}
        >
          <NavItem onClick={() => console.log("Logout")}>
            <LogOut size={20} />
            Logout
          </NavItem>
          <AuthLogoutButton />
        </div>
      </Sidebar>
    </>
  );
}

export default NavBar;
