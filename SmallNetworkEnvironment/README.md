# Build a small network environment
# 建構網路環境
```
金門大學資訊工程學系 
Led by 鄭石光 under the guidance of Professor 柯志亨
``` 


### Welcome~
Welcome to our exploration of building a small network environment. Throughout this, we will guide you through the fundamental aspects of creating a well-structured and efficient network, providing insights into essential components and best practices under the guidance of our experienced Professors 柯志亨 focusing on performing experiments in the field of [Network Environtment].

### 1. Material 
1. Vmware Workstation Player
```
https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html
```

2.EVE-NG-Win-Client-Pack.exev

##### Windows client side pack that will install everything necessary for running telnet, vnc, Wireshark, and rdp applications including Wireshark, UltraVNC (Repeater, Server, Viewer, Launcher)


3.PNET4.2.10 (Modified for project)
```
https://drive.google.com/drive/folders/1ST30mpqev3Hhxmoi42X1DnD0HE9nl-SU?usp=sharing
```

### 2. Starting
#### A. PNET Setup~
1 Download all material up there

2 Open <code>Window security</code> ~ <code>Device security</code> ~ Turn off <code>Core isolation</code> when build a Workstation
<h6> Pop info: Because when <code>Core isolation</code> is on, I can't create the virtual machine, after I turn off <code>Core isolation</code> I already can create a virtual machine, Maybe it's because when we build a Virtual Machine we need to add Core to the Machine. </h6>

3 Open <code>Wmware</code> ~ <code>Open a Virtual Machine</code> ~ Import from <code>PNET</code> file

<img src="images/import.png" alt="Import Virtual Machine" width="400"/>

<h6> Pop info: When building a Workstation <code>Core isolation</code> should be turn off</h6>

4 Open Virtual Machine Setting ~ Network Adapter choose <code>NAT</code> ~ Save

5 Play Virtual Machine
<h6> Pop Info: If you didn't turn on VirtualMachine, you can't access the website</h6>

6 First display in Virtual Machine will show a picture like the one below, copy the <code> IP Address</code> and paste it to the browser 
<img src="images/pnet.png" alt="PNET Website" width="400"/>

7 SignUp ~ Email Activation ~ Login in <code>Website</code>

#### B. Build an Environment~

8 Add new lab ~ give name ~ Add

<img src="images/login.png" alt="Add new lab" width="400"/>


9 Mouse go right ~ Add an Object ~ Nodes

<img src="images/nodes.png" alt="PNET nodes" width="400"/>


10 Choose <code>Cisco IOL L2</code> ~ Name = SW ~ Tap Icon = Switch Blue.png ~ Save

<img src="images/sw.png" alt="First nodes" width="400"/>

<h6> Pop Info: <code>Cisco IOL</code> = Router
& <code>Cisco IOL L2</code> = Switch</h6>

11 Mouse go right ~ Add an Object ~ Nodes ~ Choose <code>Virtual PC VPCS</code> ~ <code>Number of nodes to add = 2</code> ~ Name = VPC ~ Tap Icon = Desktop.png ~ Save

<img src="images/pcs.png" alt="Second nodes" width="400"/>


12 Mouse to node ~ Connect to another node ~ <code>VPC2 & VPC3 to SW</code>

<img src="images/connection.png" alt="Connection" width="400"/>


13 Mouse go right ~ Setup Nodes ~ Start All Nodes

<img src="images/startconnect.png" alt="Start all nodes" width="400"/>


14 After connecting All Nodes will turn blue color if connected

<img src="images/afterconnect.png" alt="Start all nodes" width="400"/>

15 Tap <code>VPC2</code> ~ Will show Popup ~ Press <code>Open SSH, Telnet, Rlogin client</code>

<img src="images/setip.png" alt="Start all nodes" width="400"/>


16 In <code>VPC2</code> type <code>ip 192.158.1.1 255.255.255.0</code>

<img src="images/set2.png" alt="Set VPC2" width="400"/>


17 In <code>VPC3</code> type <code>ip 192.158.1.2 255.255.255.0</code> ~ then type <code>ping 192.168.1.1</code> for test connection VPC2

<img src="images/set3.png" alt="Set VPC3" width="400"/>

<h6> Pop Info: <code>ping 192.168.1.1</code> = Testing PV2
  
& <code>ping 192.168.1.2</code> =Testing PV3</h6>

#### C. Closing Project~

18 Mouse go right ~ Setup Nodes ~ Stop All Nodes ~ Nodes will turn gray color ~ Mouse go right ~ Destroy Lab ~ Logout
<img src="images/finish.png" alt="Stop Project" width="400"/>

19 Open Vmware ~ Shut Down Guest

<img src="images/terminate.png" alt="Terminate Virtual Machine" width="400"/>


20 Window Security ~ Device security ~ Turn back on <code>Core isolation</code>

### D. Conclusion

In conclusion, building a small network environment is a very useful lesson, we were introduced to network systems, Telnet, Wireshark, and how to build networks. As we learn the ins and outs of setting up a network, configuring devices, and ensuring connectivity is established, it's evident that proper network design can have a significant impact on productivity and collaboration, and it's a lot of fun!.
