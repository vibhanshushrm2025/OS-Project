#include<bits/stdc++.h>
#include <iostream>
// #include <sys/socket.h>
// #include <netinet/in.h>
#include <string.h>
#include <unistd.h>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;


std::mutex mtx;
std::vector<int> clients;

void handle_client(int client_socket) {
    char buffer[1024];
    memset(buffer, 0, sizeof(buffer));
    int n = read(client_socket, buffer, sizeof(buffer));
    if (n < 0) {
        std::cerr << "Error reading from socket" << std::endl;
        return;
    }
    std::cout << "Received message from client: " << buffer << std::endl;
    if (strcmp(buffer, "Alice") == 0 || strcmp(buffer, "Bob") == 0) {
        clients.push_back(client_socket);
    } else {
        std::lock_guard<std::mutex> guard(mtx);
        for (int i = 0; i < clients.size(); i++) {
            if (clients[i] != client_socket) {
                n = write(clients[i], buffer, strlen(buffer));
                if (n < 0) {
                    std::cerr << "Error writing to socket" << std::endl;
                }
            }
        }
    }
    close(client_socket);
}

void LeastedRecentltyUsed(map<string,int> &mp,vector<pair<int,string>>  messages)
{

	int n = messages.size();
	bool fl = 0;
   for(int i = 0;i<n;i++)
   {
   	 if(mp.size()<=5) 
   	 	{
   	 		fl = 1;
   	 		return;
   	 	}

   	 mp.erase(messages[i].second);
   }
}




int main()
{
	string s;
	cin>>s;
	map<string,int> mp;
	while(s != "-1")
	{
		mp[s]++;
		vector<pair<int,string>>  messages;
        
       

		for(auto i : mp)
		{
			messages.push_back({i.second,i.first});
		}

		sort(messages.begin(),messages.end());

		 if(mp.size()>5)
		 LeastedRecentltyUsed(mp,messages);

		cout<<"Your 5 most sent messages : \n";
		for(auto i : messages)
		{
			cout<<i.second<<"\n";
		}
		
		cin>>s;
	}


	
}

// int main() {
//     int server_socket, client_socket;
//     struct sockaddr_in server_addr, client_addr;
//     server_socket = socket(AF_INET, SOCK_STREAM, 0);
//     if (server_socket < 0) {
//         std::cerr << "Error creating socket" << std::endl;
//         return 1;
//     }
//     memset(&server_addr, 0, sizeof(server_addr));
//     server_addr.sin_family = AF_INET;
//     server_addr.sin_port = htons(8080);
//     server_addr.sin_addr.s_addr = INADDR_ANY;
//     if (bind(server_socket, (struct sockaddr*) &server_addr, sizeof(server_addr)) < 0) {
//         std::cerr << "Error binding socket" << std::endl;
//         return 1;
//     }
//     listen(server_socket, 5);
//     std::cout << "Server listening on port 8080" << std::endl;
//     while (true) {
//         socklen_t client_len = sizeof(client_addr);
//         client_socket = accept(server_socket, (struct sockaddr*) &client_addr, &client_len);
//         if (client_socket < 0) {
//             std::cerr << "Error accepting connection" << std::endl;
//             continue;
//         }
//         std::thread t(handle_client, client_socket);
//         t.detach();
//     }
//     return 0;
// }
