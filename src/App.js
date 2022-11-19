function App() {
  return (
    <div className="min-h-screen bg-dc-white flex p-4">
      <div className="h-fit flex flex-col gap-4 bg-dc-black p-4">
        <button className="btn-desktop btn-dc-red">Button Red</button>
        <button className="btn-desktop btn-dc-red-outline">Button Red Outline</button>
        <button className="btn-desktop btn-dc-white">Button White</button>
        <button className="btn-desktop btn-dc-white-outline">Button White Outline</button>
      </div>
      <div className="h-fit flex flex-col gap-4 bg-dc-black p-4 ml-4">
        <button className="btn-desktop btn-dc-red">Button Desktop</button>
        <button className="btn-tablet btn-dc-red">Button Tablet</button>
        <button className="btn-mobile btn-dc-red">Button Mobile</button>
      </div>
    </div>
  );
}

export default App;
