export const App = () => {
  const ideas = [
    {nick: 'test-1', name: 'test', description: 'Description test'},
    {nick: 'test-2', name: 'test', description: 'Description test'},
    {nick: 'test-3', name: 'test', description: 'Description test'},
    {nick: 'test-4', name: 'test', description: 'Description test'},
  ]
  return (
    <div>
      <h1>Webapp</h1>
      {ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}