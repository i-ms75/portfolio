import HomeFile from './files/HomeFile';
import AboutFile from './files/AboutFile';
import ProjectsFile from './files/ProjectsFile';
import SkillsFile from './files/SkillsFile';
import ContactFile from './files/ContactFile';
import PackageJsonFile from './files/PackageJsonFile';

const fileComponents = {
    home: HomeFile,
    about: AboutFile,
    projects: ProjectsFile,
    skills: SkillsFile,
    contact: ContactFile,
    package: PackageJsonFile,
};

export default function EditorContent({ activeTab, onNavigate }) {
    const Component = fileComponents[activeTab];

    if (!Component) {
        return (
            <div
                className="flex-1 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-vscode-bg)' }}
            >
                <div className="text-center">
                    <div className="text-6xl mb-4 opacity-20">📝</div>
                    <p style={{ color: 'var(--color-vscode-text-dim)' }} className="text-sm">
                        Select a file from the explorer to get started
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div
            className="flex-1 overflow-y-auto overflow-x-hidden"
            style={{ backgroundColor: 'var(--color-vscode-bg)' }}
        >
            <Component onNavigate={onNavigate} />
        </div>
    );
}
