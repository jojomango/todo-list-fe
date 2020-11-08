import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            list of side projects:
            <ul>
                <li>
                   <Link to="/todo">todo list</Link>
                </li>
            </ul>
        </div>
    );
}