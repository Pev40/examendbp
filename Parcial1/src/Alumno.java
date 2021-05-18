
public class Alumno {
	int cui;
	String clave;
	
	public Alumno() {
		this.cui = 20202229;
		this.clave = "PieroEmilinao";
	}
	
	public Alumno(int cui, String clave) {
		this.cui = cui;
		this.clave = clave;
	}
	
	public int getCUI() {
		return cui;
	}
	
	public void setCUI(int cui) {
		this.cui = cui;
	}
	
	public String getClave() {
		return clave;
	}
	
	public void setCodigo(String clave) {
		this.clave = clave;
	}
}
