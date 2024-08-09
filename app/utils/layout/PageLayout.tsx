import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    title: string;
  }

const PageLayout = ({children, title}: LayoutProps) => {
    return (
        <div className="flex flex-col space-y-12 w-5/6 mx-4 py-2">
            <div className="flex flex-col justify-center w-full h-16 px-4  bg-primary rounded-md shadow-lg">
                <h1 className="text-2xl text-fontPrimary font-extrabold">{title}</h1>
            </div>
            {children}
        </div>
    );
};

export default PageLayout;