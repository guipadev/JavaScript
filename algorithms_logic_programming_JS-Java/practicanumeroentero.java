public class practicanumeroentero{
	public static void main(final String[] args) {

		final int num = 10000;
	
		if (num > 0 && num <= 9999){
		
			if (num < 10){
			System.out.println("El número tiene un digitos");
			}

			if (num >= 10 && num <= 99){
				System.out.println("El número tiene dos digitos");
			}

			if (num >= 100 && num <= 999){
				System.out.println("El número tiene tres digitos");
			}

			if (num >= 1000 && num <= 9999){
				System.out.println("El número tiene cuatro digitos");
			}
		}else {
			System.out.println("Introduce un número entre  1 y 9999, vale!");
		}
    }
}
