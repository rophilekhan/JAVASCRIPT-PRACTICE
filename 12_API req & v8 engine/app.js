
const requestURL = 'https://api.github.com/users/rophilekhan'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestURL)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
        var data = JSON.parse(this.responseText)
        console.log( data);
        // Set the src attribute of the image
        document.getElementById('picture').src = data.avatar_url;

        // Update user details
        document.getElementById('userName').innerHTML = data.name;      
        document.getElementById('userFollowers').innerHTML = `User Followers: ${data.followers}`;      
        
        
    }
}


xhr.send()
