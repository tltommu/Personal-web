const { useState, useEffect } = React;

const App = () => {
    const [showHobby, setShowHobby] = useState(true);
    const [showTechStack, setShowTechStack] = useState(false);

    const toggleHobby = () => {
        setShowHobby(!showHobby);
    };

    const toggleTechStack = () => {
        setShowTechStack(!showTechStack);
    };

    useEffect(() => {
        gsap.from('.intro-text', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from('.info-card', { opacity: 0, x: -50, duration: 1, delay: 1 });
        gsap.from('.beta-message', { opacity: 0, y: 30, duration: 1, delay: 1.5 });
    }, []);

    useEffect(() => {
        if (showHobby) {
            gsap.fromTo('.hobby-message', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
        }
    }, [showHobby]);

    useEffect(() => {
        if (showTechStack) {
            anime({
                targets: '.tech-stack li',
                opacity: 1,
                translateY: 0,
                delay:anime.stagger(100),
            });
        }
    }, [showTechStack]);

    return React.createElement(
        'div',
        { className: 'info-card' },
        React.createElement(
            'h1',
            { className: 'text-2xl font-bold mb-4 intro-text' },
            'Hello, I\'m Tommy'
        ),
        React.createElement(
            'div',
            { className: 'section' },
            React.createElement(
                'p',
                { className: 'text-gray-700 mb-4 intro-text' },
                'I\'m a self-starter looking to kickstart a career in web development.'
            )
        ),
        React.createElement(
            'div',
            { className: 'section' },
            React.createElement(
                'p',
                { className: 'text-gray-700 mb-4 intro-text' },
                'I enjoy coding generally and I\'m passionate about crafting clean and efficient code.'
            )
        ),
        React.createElement(
            'div',
            { className: 'section' },
            React.createElement(
                'p',
                { className: 'text-gray-700 mb-4 intro-text' },
                'Feel free to reach out at ',
                React.createElement(
                    'a',
                    { className: 'email-link', href: 'mailto:tltommu527@gmail.com' },
                    'tltommu527@gmail.com'
                ),
                '.'
            )
        ),
        React.createElement(
            'div',
            { className: 'section' },
            React.createElement(
                'p',
                { className: 'text-gray-700 mb-4 intro-text ' },
                'This is just the beta-version of the webpage and hopefully I can keep improving it as I enhance my web-developing skill.'
            )
        ),
        React.createElement(
            'div',
            { className: 'section' },
            React.createElement(
                'h2',
                { className: 'text-xl font-bold mb-2', onClick: toggleHobby, style: { cursor: 'pointer' } },
                'Click for more about me'
            ),
            showHobby && React.createElement(
                'p',
                { className: 'text-gray-700 mb-4 intro-text beta-message hobby-message' },
                'I do ice-skating and coding occasionally as you are aware',
                React.createElement(
                    'div',
                    { className: 'extra-section', onClick: toggleTechStack, style: { cursor: 'pointer' } },
                    'Tech Stack(click me)'
                ),
                showTechStack && React.createElement(
                    'ul',
                    { className: 'tech-stack left-border' }, /* Added left border to tech stack */
                    React.createElement(
                        'li',
                        null,
                        'Programming Languages',
                        React.createElement(
                            'ul',
                            null,
                            React.createElement('li', null, 'Python',
                                React.createElement('ul', null,
                                    React.createElement('li', null, 'Django'),
                                    React.createElement('li', null, 'Flask')
                                )
                            ),
                            React.createElement('li', null, 'JavaScript',
                                React.createElement('ul', null,
                                    React.createElement('li', null, 'React',
                                        React.createElement('ul', null,
                                       
                                        )
                                    ),
                                    React.createElement('li', null,  'Node.js')
                                )
                            ),
                            React.createElement('li', null, 'C#',
                                React.createElement('ul', null,
                                    React.createElement('li', null, '.NET Core'),
                                    React.createElement('li', null, 'ASP.NET')
                                )
                            ),
                            React.createElement('li', null, 'CSS',
                                React.createElement('ul', null,
                                    React.createElement('li', null, 'Sass'),
                                    React.createElement('li', null, 'Less'),
                                                    
                                       
                                                    
                                )
                            )
                        )
                    )
                )
            )
        ),
    );
}

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('root')
);