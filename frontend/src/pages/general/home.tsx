const Home = () => {
  return (
    <div>
      <div>Home Page</div>
      <input
        id="chat-room-name"
        type="text"
        placeholder="Name of the chatroom"
      />
      <button id="create-chat-room">Create Chatroom</button>
      <br />
      <input
        id="join-chat-room-id"
        type="text"
        placeholder="ID of the chatroom to join"
      />
      <button id="join-chat-room">Join Chatroom</button>
    </div>
  );
};

export default Home;
