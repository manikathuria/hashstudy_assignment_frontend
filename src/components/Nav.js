import { useReducer, useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";

const Nav = () => {
  const [variant, setVariant] = useState("static");
  const variants = ["static", "floating", "sticky"];
  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    }
  ];
  const { isDark } = useTheme();
  const { asPath } = useRouter();

  return (
        <Navbar isBordered = { isDark } variant={variant} maxWidth="xl">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          <Text b color="inherit" >
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight">
          {
            navItems.map((item, index) => {
              if (asPath === item.path) {
                return (
                  <Navbar.Link 
                    href={item.path} 
                    key={item}
                    isActive
                    >
                      {item.name}
                  </Navbar.Link>
                )
              } else {
                return (
                  <Navbar.Link 
                    href={item.path} 
                    key={item}
                    >
                      {item.name}
                  </Navbar.Link>
                )
              }
            }
          )}
        </Navbar.Content>
        <Navbar.Collapse>
        {navItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.path}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    );
};

export default Nav;