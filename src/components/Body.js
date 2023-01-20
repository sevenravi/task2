import React, { Component } from 'react'

export default class Body extends Component {

    posts = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }]

    constructor() {
        super();
        this.state = {
            posts: this.posts
        }
    }

    // async componentDidMount() {
    //     let URL = "https://jsonplaceholder.typicode.com/posts"
    //     let data = await fetch(URL)
    //     let parsedData = await data.json()
    //     console.log(parsedData);
    //     this.setState({ posts: parsedData.posts })
    // }
    render() {
        return (
            <div className='my-3'>
                <h1 className='text-center'>This is task 2</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((element) => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td>{element.body}</td>
                                <td>
                                    {/* <button onClick={() => handleUpdate(item)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
