import { useState, useCallback } from 'react';
import { PhilosophyProvider } from './context/PhilosophyContext';
import { ThemeProvider } from './context/ThemeContext';
import TitleBar from './components/TitleBar';
import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import EditorTabs from './components/EditorTabs';
import EditorContent from './components/EditorContent';
import TerminalPanel from './components/TerminalPanel';
import StatusBar from './components/StatusBar';

const DEFAULT_TABS = ['home', 'about', 'projects'];
const DEFAULT_ACTIVE = 'home';

function App() {
    const [activeTab, setActiveTab] = useState(DEFAULT_ACTIVE);
    const [openTabs, setOpenTabs] = useState(DEFAULT_TABS);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSidebarSection, setActiveSidebarSection] = useState('explorer');
    const [terminalOpen, setTerminalOpen] = useState(true);

    const openFile = useCallback((fileKey) => {
        if (!openTabs.includes(fileKey)) {
            setOpenTabs(prev => [...prev, fileKey]);
        }
        setActiveTab(fileKey);
    }, [openTabs]);

    const closeTab = useCallback((fileKey) => {
        setOpenTabs(prev => {
            const newTabs = prev.filter(t => t !== fileKey);
            if (fileKey === activeTab && newTabs.length > 0) {
                const closedIndex = prev.indexOf(fileKey);
                const newActiveIndex = Math.min(closedIndex, newTabs.length - 1);
                setActiveTab(newTabs[newActiveIndex]);
            } else if (newTabs.length === 0) {
                setActiveTab(null);
            }
            return newTabs;
        });
    }, [activeTab]);

    const handleSidebarToggle = useCallback((section) => {
        if (activeSidebarSection === section && sidebarOpen) {
            setSidebarOpen(false);
        } else {
            setActiveSidebarSection(section);
            setSidebarOpen(true);
        }
    }, [activeSidebarSection, sidebarOpen]);

    const toggleTerminal = useCallback(() => {
        setTerminalOpen(prev => !prev);
    }, []);

    return (
        <ThemeProvider>
            <PhilosophyProvider>
                <div className="h-screen w-screen flex flex-col overflow-hidden transition-theme">
                    {/* Title Bar */}
                    <TitleBar />

                    {/* Main Body */}
                    <div className="flex flex-1 overflow-hidden">
                        {/* Activity Bar */}
                        <ActivityBar
                            activeSidebarSection={sidebarOpen ? activeSidebarSection : null}
                            onSidebarToggle={handleSidebarToggle}
                        />

                        {/* Sidebar */}
                        {sidebarOpen && (
                            <Sidebar
                                onFileClick={openFile}
                                activeFile={activeTab}
                            />
                        )}

                        {/* Editor Area */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {/* Tabs + Breadcrumbs */}
                            <EditorTabs
                                openTabs={openTabs}
                                activeTab={activeTab}
                                onTabClick={setActiveTab}
                                onTabClose={closeTab}
                            />

                            {/* Editor Content */}
                            <EditorContent
                                activeTab={activeTab}
                                onNavigate={openFile}
                            />

                            {/* Terminal */}
                            <TerminalPanel
                                isOpen={terminalOpen}
                                onToggle={toggleTerminal}
                            />
                        </div>
                    </div>

                    {/* Status Bar */}
                    <StatusBar
                        activeTab={activeTab}
                        onTerminalToggle={toggleTerminal}
                        terminalOpen={terminalOpen}
                    />
                </div>
            </PhilosophyProvider>
        </ThemeProvider>
    );
}

export default App;
