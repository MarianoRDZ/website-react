import React, { type ReactNode, type HTMLAttributes } from 'react'

type HeaderProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

type LogoProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode
}

type NavProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

type ActionsProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const Logo = ({ children, ...props }: LogoProps) => (
  <h1 className="text-2xl font-bold text-white" {...props}>
    {children}
  </h1>
)

const Nav = ({ children, ...props }: NavProps) => (
  <nav className="flex gap-6 text-white" {...props}>
    {children}
  </nav>
)

const Actions = ({ children, ...props }: ActionsProps) => (
  <div className="flex gap-4 items-center" {...props}>
    {children}
  </div>
)

type CompoundHeader = React.FC<HeaderProps> & {
  Logo: React.FC<LogoProps>
  Nav: React.FC<NavProps>
  Actions: React.FC<ActionsProps>
}

const Header: CompoundHeader = ({ children, ...props }) => {
  return (
    <header className="bg-gray-800 py-6 px-4 w-full" {...props}>
      <div className="max-w-[1000px] mx-auto flex justify-between items-center">{children}</div>
    </header>
  )
}

Header.Logo = Logo
Header.Nav = Nav
Header.Actions = Actions

export default Header
