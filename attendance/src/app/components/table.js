import styles from 'src/app/table.module.css'

const people = [ {firstName: 'john', lastName: 'doe'}, {firstName: 'jane', lastName: 'doe'}]
const isChecked = (month, day) => {
  return false;
}
const setChecked = (checked) => {

}

export default function Table({ items }) {
    const monthName = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6:'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11:'Nov',
        12: 'Dec'
    }
    const getDates = () => {
        const getSundays = () => {
            const now = Date.now()
            const date = new Date(new Date(now).getFullYear(), 0, 1);
            while (date.getDay() !== 0) {
                date.setDate(date.getDate() + 1);
            }
            const sundays = [];
            while (date.getFullYear() == new Date(now).getFullYear()) {
                const m = date.getMonth() + 1
                const d = date.getDate()
                sundays.push({month: m, day: d})
                date.setDate(date.getDate() + 7)
            }
            return sundays
        }
        const sortDates  = (a, b) => {
          if(a.month - b.month !== 0) {
            return a.month - b.month
          } else {
            return a.day - b.day
          }
        }
        const getToday = () => {
          const t = new Date()
          return {month: t.getMonth() + 1, day: t.getDate()}
        }
        const sundays = getSundays();
        const today = getToday();
        const dates = []
        if(today.day / 7 === 1) {
          sundays.sort(sortDates)
          const index = sundays.findIndex(d => d == today)

          dates.push(sundays[index - 1])
          dates.push(today)
          dates.push(sundays[index + 1])
          dates.push(sundays[index + 2])
          dates.push(sundays[index + 3])
        } else {
          sundays.push(today)
          sundays.sort(sortDates)
          const index = sundays.findIndex(d => d == today)

          dates.push(sundays[index - 1])
          dates.push(sundays[index + 1])
          dates.push(sundays[index + 2])
          dates.push(sundays[index + 3])
          dates.push(sundays[index + 4])
        }

        return dates
    }
    const dates = getDates()
    
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.headingName}>Name</th>
            {dates.map(({month, day}, index) => {
              return <th key={index} className={styles.date}>{monthName[month]} {day}</th>
            })
      }
          </tr>
        </thead>
        <tbody>
          {people.map(({firstName, lastName}, index) => {
            return (
              <tr key={index} className={styles.row}>
                <td className={styles.name}>{firstName} {lastName}</td>
                {dates.map(({month, day}, index) => {
                  return (
                  <td key={index} className={styles.date}>
                    <input type="checkbox" data-date={month + "-" + day} checked={isChecked(month, day)} onClick={setChecked(!isChecked(month, day))}/>
                  </td>
                  )
                })
      }
              </tr>
            ) 
          })
      }

        </tbody>
      </table>
    </>
    
  )
}
