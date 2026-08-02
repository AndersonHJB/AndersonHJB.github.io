---
title: Python一对一学员答疑
date: 2023-04-01 23:32:32
author: AI悦创
isOriginal: true
category: 
    - Python一对一答疑
tag:
    - Python一对一答疑
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true

backToTop: true
toc: true
---

你好，我是悦创。

::: details 聊天记录

![](https://blog.images.bornforthis.cn/docs-images/sha256/55/5595b8bf6fadd55d625531ff97c92fe8f19de76331cbc8ec991c4a3f7fcf4417.png)

:::

::: code-tabs

@tab code

```python
import re

dict_name = {}
with open('dictdata.txt', 'r', encoding='UTF-8', ) as f:
    for line in f.readlines():
        print(line)
        text_lsit = re.split("[':{}]", line)
        print(text_lsit)
        dict_name.update({text_lsit[2]: text_lsit[4]})
    f.close()
user_input = input('请输入想要查询的人名的年龄')
result = dict_name.get(user_input)
print(f"查询结果为{result}")
```

@tab dictdata.txt

```
{'Leah Welch': 27}
{'Cory Clark': 26}
{'Paige Brown': 29}
{'William Evans': 18}
{'Gary Smith': 22}
{'Vincent Patterson': 20}
{'Philip Newman': 26}
{'Timothy Monroe': 23}
{'Kimberly Miller': 27}
{'Hayley Collins': 18}
{'Richard King': 29}
{'Taylor Green': 20}
{'Debra Mccullough': 27}
{'Steven Brown': 21}
{'Kayla Lopez': 24}
{'Joseph Jones': 24}
{'Daniel Black': 30}
{'Tamara Gardner': 24}
{'Luis Coffey': 27}
{'Christopher Collier': 18}
{'Christopher Lawrence': 25}
{'Michael Eaton DDS': 28}
{'Michael Lewis': 26}
{'Gregory Weiss': 20}
{'Jason Smith': 18}
{'John Randall': 19}
{'Nicole Black': 30}
{'Kyle Wells': 29}
{'Samantha Kennedy': 20}
{'Terry Wilson': 22}
{'Crystal Jones': 30}
{'Karen Novak': 21}
{'Bryan Hernandez': 26}
{'Laura Miller': 18}
{'Ronald Jordan': 18}
{'Alicia Alexander': 27}
{'Cynthia Maldonado': 28}
{'Valerie Johnson': 29}
{'Rhonda Brown': 26}
{'Amanda Werner': 18}
{'Jennifer Bradley': 23}
{'Todd Wolfe': 30}
{'Kimberly Hawkins': 19}
{'Patricia Woods': 21}
{'Phillip Stout': 18}
{'Rebecca Blackburn': 23}
{'Debbie Martin': 23}
{'Valerie Manning': 23}
{'Allison Lloyd': 18}
{'Denise Wilson': 25}
{'Tamara Parker': 29}
{'Sarah Reynolds': 20}
{'Matthew Navarro': 20}
{'Tina Martinez': 29}
{'Shawn Smith': 25}
{'Bonnie Aguilar': 20}
{'Adam White': 29}
{'Jordan Johnson': 30}
{'Timothy Fowler': 25}
{'Amanda Diaz': 30}
{'Manuel Carter': 24}
{'Justin Williams': 21}
{'Katherine Lewis': 21}
{'Jessica Gillespie': 28}
{'Michelle Johnson': 26}
{'Renee Vasquez': 22}
{'Lawrence Lee': 30}
{'Samantha Miller': 28}
{'Robin Soto': 19}
{'Amanda Wagner': 28}
{'Dr. Juan Lewis': 19}
{'Samantha Carpenter': 19}
{'William Dean': 18}
{'Alicia Ortiz': 18}
{'Mr. Jeffrey Fitzgerald DVM': 18}
{'Dwayne Gonzalez': 19}
{'Wanda Taylor': 29}
{'Derrick Oconnor': 19}
{'Mr. Ryan Clark Jr.': 18}
{'Amy Dennis': 25}
{'Caleb Beasley': 25}
{'Laura Bailey': 29}
{'Carla Carr': 21}
{'Melinda Brooks': 23}
{'Frank Brewer': 24}
{'John Moreno': 28}
{'Laura Hale': 20}
{'Matthew Patterson': 19}
{'Amy Good': 21}
{'Amanda Phillips': 27}
{'Judy Mcconnell': 18}
{'Amanda Moore': 28}
{'Jose Butler': 20}
{'Nicholas Rogers': 26}
{'Christopher Robinson': 22}
{'Bryan Acosta MD': 22}
{'Joseph Lam': 20}
{'Bradley Pruitt': 30}
{'Christopher Maldonado': 18}
{'Dawn Ferguson': 21}
{'Bruce Simmons': 26}
{'Jeremy Romero': 20}
{'Kara Miller': 21}
{'Diane Kelley': 21}
{'John Harris': 27}
{'Monica Salas': 27}
{'Sarah Gutierrez': 30}
{'Andrew Gray': 18}
{'Jennifer Sawyer': 26}
{'Nicole Thompson': 26}
{'Claudia Burns': 28}
{'Eric Hoffman': 21}
{'Kelly Mccoy': 25}
{'David Price': 29}
{'Brian Robertson': 29}
{'Nancy Brown': 22}
{'Adam Russell': 22}
{'April Garcia': 29}
{'Melissa Johnson': 23}
{'Robin Vargas': 26}
{'Jessica Thompson': 20}
{'Randy Mcmahon': 18}
{'Megan Martinez': 27}
{'Michelle Barrett': 21}
{'Gerald Levine': 25}
{'Julie Miller': 24}
{'Joshua Zuniga': 23}
{'Aaron Harris': 20}
{'Alan Wilson': 19}
{'John Anderson': 21}
{'Gregory Jones': 28}
{'Krystal Robles': 19}
{'Corey White': 25}
{'Leslie Barton': 28}
{'Christine Phillips': 26}
{'James Evans': 25}
{'Robert Rose': 18}
{'Joshua Jenkins': 22}
{'Nancy Ramirez': 22}
{'Joseph Becker': 27}
{'Amber Collins': 24}
{'Roy Bautista': 25}
{'Chase Anderson': 28}
{'Cheryl Hernandez': 22}
{'Jared Lindsey': 19}
{'Scott Martin': 18}
{'Andre Schultz': 29}
{'Jose Smith': 26}
{'Amanda Cameron': 28}
{'Beth Tucker': 27}
{'Charles Morales': 18}
{'Raymond Reed': 29}
{'Christopher Walton': 19}
{'Tyler Thomas': 24}
{'Joseph Smith': 29}
{'Derek Parker': 19}
{'William Thompson': 21}
{'Melanie Williams': 30}
{'Christopher Lopez': 29}
{'Leonard Reeves': 26}
{'Brandon Goodman': 18}
{'Haley Parks': 26}
{'Vicki Delgado': 22}
{'Dawn Harrell': 18}
{'Katelyn Carrillo PhD': 26}
{'Cynthia Guerra': 26}
{'Ariana Young': 26}
{'Stephen Clark': 28}
{'Leslie Acosta': 25}
{'Sarah Rogers': 29}
{'Lindsay Anderson': 30}
{'Jennifer Wolf': 28}
{'Suzanne Stewart': 28}
{'Brittany Kelley': 19}
{'Michael Wright': 21}
{'Shawn Valencia': 21}
{'Jennifer Jenkins': 19}
{'Kathleen Whitaker': 25}
{'Todd Washington': 30}
{'Jeremy Guzman': 20}
{'Robert Daniel': 29}
{'Bradley Flores': 29}
{'Albert Meyer': 29}
{'Kenneth Kerr': 23}
{'Terry Sandoval': 24}
{'Jeffrey Hughes': 30}
{'Patrick Johnson': 19}
{'Gerald Alvarez': 27}
{'Sheryl Hamilton': 25}
{'Kenneth Walsh': 21}
{'Susan Moss': 29}
{'Sarah Craig': 28}
{'Christopher Faulkner': 25}
{'Barbara Kim': 21}
{'Willie Warren': 23}
{'Michael Elliott': 23}
{'Amanda Nelson': 20}
{'Robert Shea': 28}
{'Keith Lloyd': 21}
{'Mary Terrell': 18}
{'Phyllis Henry': 21}
{'Stephanie Clay': 29}
{'Samuel Thomas': 21}
{'Richard Knight': 24}
{'Annette Cox': 25}
{'Curtis Lee': 23}
{'Danielle Harris': 24}
{'Samuel Jones': 20}
{'Scott Castillo': 22}
{'Beth Mitchell': 24}
{'Justin White': 26}
{'Jamie Vang': 21}
{'Robert Wilson': 29}
{'Tanya Gregory': 27}
{'Deanna Ramirez': 25}
{'Maria Johnson': 28}
{'Connor Perez': 30}
{'Chad Medina': 22}
{'Crystal Jones': 25}
{'Anna Nichols': 25}
{'Brittany Simmons': 23}
{'Anthony Shepard': 22}
{'Jennifer Bennett': 22}
{'Crystal Vargas': 29}
{'Adam Dickson': 18}
{'Lisa Turner': 30}
{'Lisa Mata': 23}
{'Christine Williams': 28}
{'David Dixon': 21}
{'Joy Bartlett': 27}
{'Michael Duncan': 28}
{'Ian Torres': 30}
{'Gabriel Roberts': 29}
{'Mr. Douglas Mason': 21}
{'Elizabeth Wilkins': 23}
{'Robert Flores': 21}
{'Alexander Tyler': 19}
{'David Harding': 28}
{'John Chavez': 25}
{'April Larsen': 27}
{'Mr. Cory Calhoun': 27}
{'Michael Fleming': 19}
{'Melissa Proctor': 18}
{'Crystal Robinson': 21}
{'Jessica Richards': 30}
{'Katherine Torres': 20}
{'Aaron Green': 18}
{'Tammy Mann MD': 26}
{'Amy Garza': 29}
{'Matthew Hughes': 22}
{'Noah Leblanc': 18}
{'Roger Ford': 29}
{'Elizabeth Parsons': 22}
{'Melissa Hall': 24}
{'Carly Thomas': 27}
{'Austin Sandoval': 19}
{'Craig Singleton': 28}
{'Andrew Buchanan': 26}
{'Sara Gutierrez': 24}
{'Patricia Cross': 18}
{'Andrea Alexander': 19}
{'Amanda Ortega': 24}
{'Donna Washington': 28}
{'Matthew Ramsey': 22}
{'Brenda Anthony': 19}
{'Gail Jackson': 22}
{'Michelle Jackson': 22}
{'Alexandra Ford': 22}
{'Edward Martin': 23}
{'Briana Nelson': 29}
{'Rodney Newton': 30}
{'Jeffrey Patton': 25}
{'Cindy Hurley': 24}
{'Sierra Collins': 20}
{'Susan Walls': 29}
{'Randy Olsen': 20}
{'Nathan Bridges': 19}
{'Terri Mcdonald': 27}
{'Elizabeth Tran': 24}
{'David Tucker': 22}
{'Daniel Hernandez': 30}
{'Carlos Stevens': 18}
{'Kimberly Lopez': 21}
{'Philip Swanson': 28}
{'Alexis Taylor': 20}
{'Sierra Estes': 20}
{'Emily Jones': 26}
{'Nicole Soto': 22}
{'Karen Manning': 28}
{'Jill Garrett': 18}
{'Dean Green': 19}
{'Craig Nicholson': 23}
{'Gabriella Anderson': 21}
{'Lisa Williams': 26}
{'Ryan Torres': 25}
{'Jeffrey Johnson': 22}
{'Brian Mcintosh': 19}
{'Donald Vazquez': 20}
{'John Torres': 22}
{'Jennifer French': 26}
{'Dustin Cunningham': 22}
{'Michael Ferguson': 30}
{'Billy Powers': 24}
{'Travis Quinn': 21}
{'April Schwartz': 29}
{'Vincent Hunt MD': 28}
{'Kimberly Gomez': 18}
{'Nicholas Hernandez': 24}
{'Michael Carter': 18}
{'Melinda Frank': 29}
{'Jason Guzman': 26}
{'Tony Brown': 27}
{'George Dickerson': 25}
{'Krista Freeman': 26}
{'Philip Santos': 18}
{'Kimberly Smith': 30}
{'Rachel Gould': 27}
{'Barry Alvarez': 30}
{'Tami Wilson': 30}
{'Christine Hernandez': 20}
{'Raymond Harrison': 23}
{'David Stokes': 28}
{'William Edwards': 19}
{'Andrea Hill': 18}
{'Stephen Summers': 21}
{'Cory Johnson': 26}
{'Nancy Turner': 25}
{'Raymond Aguilar': 29}
{'Jessica Perez': 23}
{'Michelle Carlson': 18}
{'Rebecca Jackson': 26}
{'Charles Kelley': 21}
{'George Perez': 20}
{'Thomas Reyes': 29}
{'Grace Salazar': 20}
{'Scott Beck': 30}
{'John Willis': 20}
{'Lisa Morales': 26}
{'William Chavez': 23}
{'Amanda Hull': 22}
{'Melissa Taylor': 21}
{'James Collier': 22}
{'Michael Mullins': 20}
{'Kevin Lee': 19}
{'Gary Lyons': 20}
{'Beverly Castillo': 27}
{'Steven Dickerson': 27}
{'Christine Sanchez': 18}
{'Mrs. Laura Melendez PhD': 29}
{'Walter Waters': 29}
{'Alexandra Cunningham MD': 18}
{'Cynthia Kim': 25}
{'Jessica Pearson': 28}
{'Joshua Cunningham': 29}
{'Misty Silva': 23}
{'Kim Smith': 30}
{'William Wall': 22}
{'Lisa Anderson': 25}
{'Samuel Guzman': 19}
{'Brandi Johnson': 29}
{'Julie Myers': 28}
{'Mr. Joshua Price': 23}
{'Sheila Dunn': 22}
{'Kimberly Lane': 29}
{'Sue Harrison': 19}
{'Gregory Stephens': 18}
{'Marc Martinez': 20}
{'Susan Hale': 23}
{'Cynthia Collier MD': 27}
{'Eric Estrada': 21}
{'Joshua Rogers': 25}
{'Travis Henderson': 20}
{'Donna Brown': 26}
{'Jennifer Hill': 21}
{'Brittany Miller': 22}
{'Casey Santos': 30}
{'Charles Phillips': 28}
{'Phillip Good': 28}
{'William Rodriguez': 27}
{'Rita Baldwin': 19}
{'Bryan Huerta': 26}
{'Anthony Chung': 24}
{'Russell Nelson': 27}
{'Jonathan Johnson': 27}
{'Alex Stewart': 29}
{'Brenda Barber': 29}
{'Emily Cunningham': 30}
{'Wendy Martinez': 25}
{'Kristin Eaton': 18}
{'Alexander Copeland': 21}
{'Mrs. Kristen Russell': 25}
{'Derek Peterson': 29}
{'Shaun Scott': 19}
{'Christian Dominguez': 26}
{'Jasmine Johnson': 24}
{'Jennifer Collins': 28}
{'Dr. Nicholas Anderson Jr.': 22}
{'Richard Young': 21}
{'Marissa Byrd': 29}
{'Robert Anderson': 22}
{'Michael Diaz': 20}
{'Hannah Jenkins': 18}
{'Joyce King': 21}
{'Shannon Jones': 18}
{'Debbie Reyes': 28}
{'Jennifer Burnett': 23}
{'Jasmin Mckinney': 19}
{'Julian Lane': 21}
{'Tonya Hudson': 23}
{'Gregory Mcpherson': 22}
{'Henry Smith': 29}
{'Alexis Wright': 24}
{'Tonya Day': 20}
{'Cynthia Yang': 29}
{'Sharon Roberts': 30}
{'Ms. Patricia Gibbs': 29}
{'Holly Mcdaniel': 18}
{'Lisa Conner': 25}
{'Roger Johnson': 26}
{'Tara Johnson': 20}
{'Ryan Tate': 23}
{'Diana Mitchell': 25}
{'Andrew James': 30}
{'Thomas Hall': 24}
{'Norman Bryant': 24}
{'Susan Williams': 19}
{'Mary Wheeler': 30}
{'Jennifer Allen': 22}
{'Jerry Lyons': 19}
{'Kimberly Kim': 24}
{'Joseph Miller': 22}
{'Corey Williams': 27}
{'Shawn Russo': 30}
{'Amber Schwartz': 23}
{'Ann Nash': 23}
{'Sherry Morris': 26}
{'Samantha Lloyd': 24}
{'Robert Powell': 30}
{'Jeanne Fuller': 25}
{'Brenda Roberts': 30}
{'Justin Henderson': 18}
{'David Rice': 19}
{'Richard Wise': 24}
{'Michelle Moses': 22}
{'Brittany Morris MD': 26}
{'Jorge Carpenter': 30}
{'Stephanie Gutierrez DDS': 29}
{'Hannah Sherman': 22}
{'Brandon Graham': 24}
{'Thomas Mcgrath': 23}
{'Martin Hernandez': 24}
{'Justin Patterson': 19}
{'Vanessa Gomez': 23}
{'Mary Ellis': 30}
{'Glenn Adkins': 25}
{'Deborah Coffey': 30}
{'Michael Smith': 29}
{'Mary Harris': 18}
{'Phillip Vaughn': 25}
{'Deborah Dickerson': 29}
{'Jeremy Patel': 19}
{'Billy House': 26}
{'John Berger DDS': 23}
{'Kathleen Ritter': 19}
{'Michael Vargas': 24}
{'Cassandra Bradford': 21}
{'Vincent Mcintosh': 21}
{'Tara Velazquez': 21}
{'Michelle Diaz': 20}
{'James Gilbert': 19}
{'Sandra Perry': 28}
{'Jason Mayer': 26}
{'Jeremy Mitchell': 30}
{'Alex Vargas': 23}
{'Ruth Garza': 19}
{'Samantha Greene': 22}
{'Douglas Wolf': 23}
{'Christopher Miller': 28}
{'Chelsea Torres': 19}
{'Kathleen Rodriguez': 24}
{'George Richardson': 23}
{'Shirley Woodard': 27}
{'Lisa Wright': 25}
{'Daniel Knight': 20}
{'Julia Mcmillan': 20}
{'Terri Russell': 26}
{'Brian Pham': 24}
{'Shawn Burns': 23}
{'Michael Swanson': 19}
{'Juan Robles': 24}
{'Beth Jones': 22}
{'Brian Williams': 22}
{'Kelly Wells': 23}
{'Elizabeth Chan': 29}
{'Mary Johnson': 30}
{'Tony Leonard': 26}
{'Joseph Holden': 28}
{'Robert Luna': 29}
{'Peter Williams': 24}
{'Matthew Clark': 28}
{'Michael Sanchez': 29}
{'Michele Gill': 26}
{'Kevin Fowler': 28}
{'Anthony Aguilar III': 27}
{'John Graham': 30}
{'Annette Carlson': 23}
{'Jesse Hoffman': 25}
{'Casey Lamb': 21}
{'Lisa Russell': 24}
{'Edgar King': 18}
{'Michael English': 24}
{'April Chapman': 27}
{'Kimberly Johnson': 28}
{'Melissa Williams': 30}
{'Courtney Clark': 18}
{'Virginia Jensen DDS': 28}
{'Lisa Young': 28}
{'Chad Davis': 27}
{'Jonathan Rios': 26}
{'Robert Richardson': 24}
{'Daniel Sullivan': 20}
{'Samantha Best': 25}
{'David Sanchez': 18}
{'Elizabeth Glenn': 25}
{'Randall Lopez': 19}
{'Yvette Mayo': 25}
{'Heather Johnson': 26}
{'Fred Singh': 26}
{'Robert Patel': 27}
{'Caleb Stephenson': 28}
{'Patricia Wilson': 29}
{'Timothy Park': 19}
{'Natasha Hunt': 20}
{'Gregory Miller': 30}
{'Alan Ball': 24}
{'Paul Morrison': 25}
{'Danielle Jordan': 21}
{'Albert Norris': 28}
{'Michael Joyce': 20}
{'Theodore Mooney': 18}
{'Erik Stone': 25}
{'Megan Chapman': 21}
{'Erin Michael': 28}
{'David Pierce': 29}
{'James Dunn': 20}
{'Amanda Carroll': 24}
{'Amy Andrews': 25}
{'Jessica Lee': 25}
{'Julie Smith': 30}
{'Kimberly Garcia': 23}
{'Jonathan Burns': 21}
{'Katherine Booker': 25}
{'Bryan Johnston IV': 20}
{'Paige Curtis': 30}
{'Mrs. Shannon Walker': 21}
{'Miss Laura Williams DDS': 29}
{'Ryan Walsh': 29}
{'Kimberly Martinez': 23}
{'David Henderson': 28}
{'Jacqueline West': 25}
{'Mrs. Stephanie Jenkins': 21}
{'Stephanie Nguyen': 30}
{'Donald Cobb': 27}
{'Keith Holt': 30}
{'Austin Chen': 30}
{'Shannon Strong': 19}
{'Crystal Tyler': 21}
{'Lori Henderson MD': 20}
{'John Martinez': 25}
{'Pamela Bray': 26}
{'Kenneth Taylor': 25}
{'Anthony Diaz': 30}
{'Cole Morris': 26}
{'Kathryn King': 21}
{'Lisa Vang DDS': 25}
{'David Rowland': 29}
{'Melanie Klein': 21}
{'Desiree Webb': 18}
{'Tracy Robbins': 27}
{'Martin Hunt': 28}
{'Amber Conner': 26}
{'Wesley Mack': 23}
{'David Jordan': 18}
{'Andrew Cole': 25}
{'William Salas': 26}
{'David Rivera': 22}
{'Tiffany Perry': 24}
{'Scott Rodriguez': 24}
{'Ashley Barry': 23}
{'Gregory Brown': 24}
{'Barbara Cooper': 23}
{'Donna Bush': 28}
{'Jose Martinez': 28}
{'Cynthia Cox': 23}
{'Juan Castro': 19}
{'Derek Long': 21}
{'Bryce Brown': 29}
{'Thomas Lopez': 29}
{'Michelle Baker': 28}
{'Jessica Mcbride': 23}
{'Rachel Petersen': 20}
{'Jason Meadows': 20}
{'Nathan Lee': 22}
{'Jack Pacheco': 25}
{'Melissa Blankenship': 26}
{'April Gonzalez': 19}
{'Elizabeth Oconnor': 25}
{'Lisa Lee': 26}
{'Ashley Medina': 30}
{'Anthony Elliott': 18}
{'Susan Kirby': 26}
{'David Williams': 27}
{'Catherine Perry': 26}
{'Justin Henderson': 28}
{'William Olson': 20}
{'Jessica Wagner': 21}
{'James Buckley': 21}
{'Leslie Barrett': 26}
{'Brittany Austin': 22}
{'Samantha Ali': 27}
{'Jason Ward': 27}
{'Jennifer Huerta': 30}
{'Linda Holder': 30}
{'Kenneth Warren': 19}
{'Michael Smith': 26}
{'Linda Cooper': 28}
{'Rebecca Hill': 21}
{'Joseph Bowen': 30}
{'Timothy Le': 23}
{'Laura Bowman': 26}
{'Devon Garcia': 26}
{'Matthew Knight': 23}
{'Christian Hernandez': 20}
{'Melissa Bryant': 28}
{'Terry Chapman': 25}
{'Matthew Adams': 20}
{'Michael Glover': 21}
{'Sandra Gordon': 22}
{'Penny Barton': 28}
{'Justin Young': 20}
{'Linda Tran': 21}
{'David Lang': 23}
{'Edwin West': 19}
{'Ronald Campbell': 20}
{'Stephanie Flores': 23}
{'Casey Snyder': 30}
{'Suzanne Jackson': 27}
{'Kaylee Davidson': 26}
{'Paige Bennett': 30}
{'Angela Hogan': 22}
{'Gregory Cruz': 19}
{'Kelly Lopez': 26}
{'Loretta Garza': 25}
{'David Young': 29}
{'Jodi Anderson': 27}
{'Craig Bailey': 27}
{'Douglas Blake': 21}
{'Tanya Smith': 24}
{'Christina Chambers': 23}
{'Donald Baker': 22}
{'Andrew Hayden': 21}
{'Angela Ramos': 24}
{'Christine Lucas': 30}
{'William York': 21}
{'Jennifer Sullivan': 22}
{'Shannon Thomas': 18}
{'Regina Santos': 23}
{'Stacey Miller': 23}
{'Alan Garrett': 28}
{'Jesus Young': 23}
{'Mallory Ruiz': 26}
{'Melissa Smith': 20}
{'Kyle Murillo': 27}
{'Dr. Vanessa Jordan': 29}
{'Melissa Robinson': 21}
{'Dr. David Ross': 23}
{'Francisco Smith': 29}
{'Mrs. Abigail Thomas': 23}
{'Marcus Barnett': 22}
{'Melissa Robles': 29}
{'Patricia Neal': 30}
{'Travis Allen': 27}
{'Jaime Schneider': 20}
{'James Terry': 24}
{'Melissa Hensley': 24}
{'Eric Mcdaniel': 21}
{'Christina Martinez': 22}
{'Amanda Foster': 21}
{'Samuel Torres': 30}
{'Robert Thompson': 21}
{'Heather Santiago': 30}
{'Brenda Clark': 30}
{'Joseph Mathis': 25}
{'James Aguirre': 19}
{'Hannah Myers': 27}
{'Gina Carter': 24}
{'David Kramer': 27}
{'Barry Barron': 24}
{'Derrick Brown': 25}
{'Benjamin Thomas': 28}
{'Paul Bush': 29}
{'John Fernandez III': 28}
{'Allison Glenn': 30}
{'David Snyder': 23}
{'Nathaniel Jenkins': 27}
{'Shelby Mills': 18}
{'Raymond Fuentes': 30}
{'Megan Suarez': 24}
{'Colin Patel': 30}
{'Andrew Holland': 21}
{'Lawrence Smith': 27}
{'Sara Wilson': 23}
{'Mark Williams': 21}
{'William Rogers': 29}
{'Paul Campos': 30}
{'Gary Larson': 22}
{'Charles Ferguson': 25}
{'Erin Lewis': 22}
{'Scott Lane': 26}
{'Jaime Williamson': 22}
{'Joshua Gilbert': 28}
{'Priscilla Cobb': 20}
{'Trevor Smith': 29}
{'Kelsey Wise': 23}
{'Jason Smith': 18}
{'Olivia Jones': 24}
{'Danielle Sanchez': 18}
{'Carolyn Reed': 18}
{'Sarah Collins': 18}
{'Bryan Smith': 20}
{'Jennifer Brady': 21}
{'Tyrone Gordon': 25}
{'Madison Lopez': 25}
{'James Gonzales': 24}
{'Olivia Floyd': 19}
{'Daniel Cochran': 23}
{'Kelly Todd': 26}
{'Brandon Webb': 26}
{'Scott Hubbard': 25}
{'Roberto Shaffer': 22}
{'Wendy Johnson': 26}
{'John Dudley': 27}
{'Michael Jackson': 21}
{'Jennifer Kelley': 20}
{'Patricia Wallace': 24}
{'Karina Kim': 30}
{'Steven Barber': 20}
{'Erin Taylor': 28}
{'Andrew Kennedy': 18}
{'Melissa Brown': 25}
{'Susan Padilla': 29}
{'Madeline Travis': 19}
{'Charles Bowman': 22}
{'Joseph Gonzalez': 29}
{'Michelle Sosa': 24}
{'Jessica Haley': 27}
{'Mark Phillips': 18}
{'David Smith': 21}
{'Brian Moore': 19}
{'James Bowen': 21}
{'Linda Burke': 22}
{'Joseph Simpson': 25}
{'Christopher Olsen': 20}
{'Seth Brown': 29}
{'Maureen Morris': 26}
{'Ian Williams': 18}
{'Jessica Hudson': 18}
{'Mary Howell': 25}
{'Rachel Mcgrath': 26}
{'Kari Torres': 29}
{'David Riley': 21}
{'Katherine Mills': 22}
{'Sandra Ortiz': 30}
{'Angela Harris': 24}
{'Rebekah Mckinney': 19}
{'Whitney Reyes': 30}
{'Ashley Jackson': 28}
{'Mary Hawkins': 18}
{'Jill White': 21}
{'Paula Riley': 26}
{'Valerie Banks': 28}
{'Ryan Fields': 20}
{'Jill Nelson': 25}
{'David Hodges': 20}
{'Trevor Brown': 23}
{'Eric Winters': 29}
{'Stacy Moore': 27}
{'Patrick Lyons': 30}
{'Ian Stephens': 26}
{'Jason Robles': 22}
{'John Mcintyre': 19}
{'Alexander Preston': 23}
{'Richard Beck': 24}
{'Paul Duffy': 27}
{'Michelle Harris': 26}
{'Sarah Bowers': 25}
{'Julia Anderson': 27}
{'Joseph Edwards': 29}
{'Christina Smith': 24}
{'John Ruiz': 20}
{'Mikayla Garcia': 20}
{'Angela Reed DVM': 20}
{'Louis Schmidt': 18}
{'Kimberly Martinez': 20}
{'Rhonda Shaw': 22}
{'Douglas Rivera': 28}
{'Regina Campbell': 26}
{'Tiffany Luna': 26}
{'Elaine Blackburn': 20}
{'Paul Ruiz': 30}
{'John Reed': 25}
{'Carol Murray': 26}
{'Peter Ross': 30}
{'Jacob Smith': 28}
{'Ashley Lopez': 23}
{'Pamela Lozano': 19}
{'Alex Carter': 22}
{'Randy Pruitt': 26}
{'Nicole Winters': 19}
{'Philip King': 28}
{'Eric Gonzales': 25}
{'Brandon Dunn': 23}
{'Sean Mitchell': 18}
{'Kelly Miller': 24}
{'Michael Reid': 21}
{'Brenda Morrow': 25}
{'Ruben Phillips': 18}
{'Robert Cummings': 18}
{'Annette Smith': 28}
{'Lauren Walker': 26}
{'Samuel Reid': 29}
{'Jerry Hansen': 25}
{'Mrs. Michelle Oneill DDS': 21}
{'Heather Rodriguez': 21}
{'Ashlee Dean': 30}
{'Danielle Frederick': 20}
{'David Butler': 19}
{'David Thompson': 26}
{'Brian Paul': 25}
{'Julie Thomas': 26}
{'Mark Thomas': 23}
{'Gabriel Jackson': 29}
{'Kelly Moore': 18}
{'Joseph Williams': 29}
{'Dominic Mitchell': 18}
{'Samantha Hill': 29}
{'Dawn Deleon': 19}
{'Dennis Brown': 22}
{'Randy Collins': 23}
{'Kristina Hull': 18}
{'Adam Bryan': 24}
{'Benjamin White': 18}
{'Paige Hayes': 27}
{'Victoria Smith': 25}
{'Joseph Thomas': 21}
{'David Miller': 21}
{'Kelly Faulkner': 19}
{'Marie Levine': 30}
{'Kimberly White': 29}
{'James Allen': 22}
{'Megan Johnston': 20}
{'Anthony Mcgee': 30}
{'Lisa Elliott': 21}
{'Jody Chavez': 27}
{'Maria Gibson': 25}
{'Chelsea Hunter': 25}
{'Megan Wallace': 19}
{'Belinda Davies': 24}
{'Lisa Doyle': 29}
{'Robin Marks': 20}
{'John Carson': 20}
{'Ryan Harris': 21}
{'Emily Owens': 28}
{'Danielle Johnson': 27}
{'John Blake': 28}
{'Paul Mills': 27}
{'Christopher Reed': 19}
{'Leslie Morales': 18}
{'Dustin Cruz': 27}
{'Michael Watts': 22}
{'Kyle Hernandez': 23}
{'Kevin Barrett': 29}
{'Mark Willis': 28}
{'Lucas Morris': 21}
{'Joseph Patton': 22}
{'Jaime Aguilar': 29}
{'Anthony Trujillo': 22}
{'Crystal Davidson': 25}
{'John Alvarez': 30}
{'Cody Roberts': 21}
{'Edward Fernandez': 28}
{'Angel Walker': 22}
{'Lori Beck': 27}
{'Robin Evans': 27}
{'Jamie Eaton': 23}
{'Jacqueline Weaver': 29}
{'Todd King': 27}
{'Jenny Murray': 25}
{'David Owens': 19}
{'Matthew Burns': 24}
{'Diane Gordon': 24}
{'Laura Becker': 28}
{'Gabrielle Garcia': 27}
{'Lisa Leon': 20}
{'Anthony Sanchez': 23}
{'Donna Ward': 19}
{'James Mcmahon': 22}
{'Anthony Kelly': 22}
{'Morgan Silva': 28}
{'Steven Ryan': 20}
{'Emily Acosta': 18}
{'Deborah Garcia': 20}
{'Jessica Carter': 26}
{'Lonnie Montes': 18}
{'David Brown': 29}
{'Kristin Martin': 21}
{'Jennifer Benitez': 28}
{'Tyler Banks': 23}
{'Dustin Franklin': 21}
{'Diane Patel': 28}
{'Brandon Lewis': 22}
{'Justin Bartlett': 21}
{'Ebony Henry': 21}
{'Gregory Estrada': 23}
{'Angela Leonard': 23}
{'Calvin Woods': 29}
{'Michael Harris': 25}
{'Ashley Reid': 22}
{'Brian West': 19}
{'Derek Chapman': 26}
{'Kathryn Jenkins': 26}
{'Mr. John Mccarthy PhD': 21}
{'Michael Mcgrath': 20}
{'Emily Cunningham': 19}
{'Matthew Bradley': 20}
{'Misty Reese': 19}
{'Joshua Holmes': 20}
{'Kristen Cabrera': 27}
{'Brandon Schwartz': 21}
{'Paula Frazier': 25}
{'Andrea Davis': 21}
{'Angela Bass': 30}
{'Brian Chandler': 27}
{'Miguel Mccullough': 19}
{'Michael Henderson': 24}
{'Carla Mcfarland': 23}
{'Michelle Underwood': 22}
{'Jasmine Mcknight': 21}
{'Alex Robinson': 19}
{'Mark Johnson': 28}
{'Brian Stewart': 21}
{'Michael Brown': 25}
{'Amy Salazar': 30}
{'Marissa Mitchell': 27}
{'Jonathan Hale': 19}
{'Patrick Potter': 25}
{'David Dominguez': 28}
{'Michelle Brown': 30}
{'Daniel Smith': 30}
{'Shannon Smith': 27}
{'Amanda Hoffman': 21}
{'Mark Thomas': 29}
{'Taylor Patterson': 29}
{'Tyrone Allen': 22}
{'Stacey Craig': 23}
{'Robert Kennedy': 28}
{'Jonathan Estrada': 21}
{'Brett Moore': 21}
{'Rachel Thomas': 30}
{'Erica Howell': 28}
{'Adrian Young': 27}
{'Kent Bryant': 26}
{'Margaret Farmer': 28}
{'Robert Clark': 30}
{'Stephanie Miranda': 21}
{'Jordan Warren': 28}
{'Laura Roberts': 21}
{'Linda Combs': 21}
{'Raven Mcdonald': 30}
{'Ann Murphy': 22}
{'Paige Guerrero': 29}
{'Alexander Smith': 26}
{'Joshua Glass': 22}
{'Adam Jones': 23}
{'Jay Johnson': 21}
{'Joshua Pope': 26}
{'Alexa Casey': 19}
{'Mary Harris': 23}
{'Jason Terry': 24}
{'William Adkins': 23}
{'Leon Rios': 18}
{'David Lowe': 23}
{'John Mccann': 21}
{'Deanna Rogers': 25}
{'Rebecca Tanner': 21}
{'Abigail Hill': 29}
{'Heidi King': 28}
{'Alicia Erickson': 20}
{'Ryan Avila': 30}
{'Jamie Baker': 26}
```

:::

## 1. re.split()

`re.split()` 是 Python 正则表达式库（ `re` 模块）中的一个函数，它用于根据指定的正则表达式对字符串进行分割。当字符串中的某个部分匹配正则表达式时，该部分会被分割出来。

下面是一个简单的例子：

```python
import re

text = "Hello, World! This is an example."

# 使用逗号、空格和叹号作为分隔符
pattern = "[, !]"  # 匹配 , 或 space 或 !

result = re.split(pattern, text)
print(result)
```

::: tip 知识点

正则表达式中的方括号 `[]` 表示匹配集合中的任意一个字符，而不是字符序列。

:::













欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)





