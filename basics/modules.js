//! Modules 
/*
    Big ball of mud --> if a programe is not well structured and can interact and change anything in the code 
    This will become a big mess, to writen the code well modules are introduced 
    where the programe will give an interface what it can offer and explicetly tells what 
    modules it depends in order to run 
 */

/*
*Modules and Scripts 
After 2015 ecma script build modules are introduced 
before script used to create a global binding and referenced that name in other script (that is only interaction of two scripts)
when ES modules cames with import and export statements we can use that to do import and export of modules with file paths and different platforms resolve it 
differently and import them 
*/
export const Variable = 1
const Variable2 = 1
export function xyz(){

}
export default Variable2

/*
*Packages 
To use a peice programe in other programe we can duplicate the code or import 
Package is a peice of project where we can have all our utils with their depencies so that we can upgrade them at single place
to distribute the package in large base there is a service where we can uplaod and download called Npm 
Npm also comes as a module along with nodeJs to esaily downlaod, install and update the packages with cli
*/  