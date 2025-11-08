The template is quite simple to use, but is provided as is, with out any warranty that it will work.
THe main place to start is to change your data in the authorinfo.tex file that is found in the subdirectory /definitions
Your work goes in the files that are found in /sectionfiles.
Images are referenced from the /images folder. You shouldn't need to change much else.
The main style definitions are in tsetemplate.sty - you probably don't need to change much there,
if you do it may break stuff. You can change colors and fonts etc there.
For the citations, I recommend using Biber to compile. The template currently uses chicago-bibtex.
I've included my .bib file so you can see how various things are cited.
There are a few extra bits and pieces that you can enable specified in the main.tex
which is the main file you need to compile to get your PDF.
I've tried to document as much as possible, but there is a ton of info online if you get stuck.
You're free to share this project with others and modify it as you like.
