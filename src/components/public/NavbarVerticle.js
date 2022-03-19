import React from "react"
import { MenuItems } from "src/data/menuItems"
import Link from "next/link"

const NavbarVerticle = (props) => {
  return (
    <div className="navbar__container">
      <div className="navbarVerticle">
        <div className="title">
          <h2>{props.loc}</h2>
        </div>
        <div className="itemList">
          {MenuItems.map((item, index) => {
              return (
                <>
                  {(item.title === props.loc) && item.subtitle && (
                    <>
                        {item.path.includes("notice") ?
                          <Link href={"/notice/[subtitle]/[page]"} as={`${item.path}/1`} >
                            <div key={index} className="navItem">
                              <div className="navLink">
                                {item.subtitle}
                              </div>
                            </div>
                          </Link>
                          :
                          <Link href={item.path}>
                            <div key={index} className="navItem">
                              <div className="navLink">
                                {item.subtitle}
                              </div>
                            </div>
                          </Link>
                        }
                    </>
                  )}
                </>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default NavbarVerticle