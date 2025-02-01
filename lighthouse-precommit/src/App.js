import logo from './logo.svg'
import './App.css'

function App() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay in loading
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 3000); // This delay will negatively affect LCP, simulating a slow load
  }, []);
  return (
    <div>
    <h1>Welcome to the Page</h1>

    <p>Here is some text content before the image.</p>

    {/* This image takes a long time to load because it's delayed */}
    <img
      src={isImageLoaded ? "https://example.com/large-image.jpg" : ""}
      alt="Large Content"
      style={{ width: "100%", height: "auto", display: isImageLoaded ? "block" : "none" }}
    />

    <p>This is more content after the image.</p>
  </div>
  )
}

export default App
